import Constant from '@core/constants'
import di from '@core/di'
import { Localization } from '@locales/i18n'
import { User } from '@models/user'
import { RootState, useAppSelector } from '@redux/store'
import Service from '@services/service'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChatMessage, ChatProvider } from './types'

const buildSystemPrompt = (user: User): string => {
  const {
    profile,
    experience,
    education,
    skill,
    project,
    certificate,
    contact,
  } = user
  const lines: string[] = [
    `You are a helpful assistant on ${profile.name}'s portfolio website.`,
    `Answer questions about ${profile.name} based on the info below.`,
    `Be friendly, concise and professional. Respond in the same language the user uses.`,
    `If asked something not covered, say you don't have that information.\n`,
    `## Profile`,
    `Name: ${profile.name}`,
    `Summary: ${profile.summary}`,
  ]

  const visibleExperiences = experience.filter((item) => item.visible)
  if (visibleExperiences.length) {
    lines.push(`\n## Work Experience`)
    visibleExperiences.forEach((item) => {
      lines.push(`- ${item.name} | ${item.position} | ${item.time}`)
      if (item.responsibilityVisible && item.responsibility)
        lines.push(`  ${item.responsibility}`)
    })
  }

  const visibleEducations = education.filter((item) => item.visible)
  if (visibleEducations.length) {
    lines.push(`\n## Education`)
    visibleEducations.forEach((item) => {
      const parts = [item.name, item.degree, item.major, item.time].filter(
        Boolean,
      )
      lines.push(`- ${parts.join(' | ')}`)
    })
  }

  const visibleSkills = skill.filter((item) => item.visible)
  if (visibleSkills.length) {
    lines.push(`\n## Skills`)
    const skillsByType = visibleSkills.reduce<Record<string, string[]>>(
      (accumulator, item) => {
        ;(accumulator[item.type] = accumulator[item.type] || []).push(item.name)
        return accumulator
      },
      {},
    )
    Object.entries(skillsByType).forEach(([type, names]) => {
      lines.push(`${type}: ${names.join(', ')}`)
    })
  }

  const visibleProjects = project.filter((item) => item.visible)
  if (visibleProjects.length) {
    lines.push(`\n## Projects`)
    visibleProjects.forEach((item) => {
      const description =
        item.descriptionVisible && item.description
          ? `: ${item.description}`
          : ''
      lines.push(`- ${item.name}${description} [${item.type}]`)
    })
  }

  const visibleCertificates = certificate.filter((item) => item.visible)
  if (visibleCertificates.length) {
    lines.push(`\n## Certificates`)
    visibleCertificates.forEach((item) => {
      lines.push(`- ${item.name} | ${item.issuer} | ${item.time}`)
    })
  }

  const visibleContacts = contact.filter((item) => item.visible)
  if (visibleContacts.length) {
    lines.push(`\n## Contact`)
    visibleContacts.forEach((item) => {
      lines.push(`- ${item.name}: ${item.url}`)
    })
  }

  return lines.join('\n')
}

const useChatBot = () => {
  const { t } = useTranslation()
  const user = useAppSelector((state: RootState) => state.userReducer.user)
  const config = useAppSelector(
    (state: RootState) => state.configReducer.config,
  )
  const provider = (config?.chatProvider ?? 'gemini') as ChatProvider

  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', content: t(Localization.chatbot_welcome) },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const userMessageCount = messages.filter(
    (message) => message.role === 'user',
  ).length
  const isLimitReached = userMessageCount >= Constant.CHAT_MAX_USER_MESSAGES

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  const sendMessage = useCallback(async () => {
    if (!inputValue.trim() || isLoading || !user || isLimitReached) return

    const text = inputValue.trim().slice(0, Constant.CHAT_MAX_INPUT_LENGTH)
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInputValue('')
    setIsLoading(true)

    try {
      const systemPrompt = buildSystemPrompt(user)
      const service = di.getSingleton(Service)
      const reply = await service.sendChatMessage(provider, updatedMessages, systemPrompt)
      setMessages((previous) => [
        ...previous,
        { id: (Date.now() + 1).toString(), role: 'model', content: reply },
      ])
    } catch (error: any) {
      const errorMessage = `${t(Localization.chatbot_error_generic)} (${error?.message})`
      setMessages((previous) => [
        ...previous,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          content: errorMessage,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, isLoading, messages, user, isLimitReached, provider, t])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  return {
    isOpen,
    setIsOpen,
    messages,
    inputValue,
    setInputValue,
    isLoading,
    sendMessage,
    handleKeyDown,
    messagesEndRef,
    inputRef,
    userMessageCount,
    isLimitReached,
  }
}

export default useChatBot
