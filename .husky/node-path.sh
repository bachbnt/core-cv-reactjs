# Add Node.js to PATH for GUI Git clients that do not load shell profiles.
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  for dir in \
    "$HOME/.nvm/versions/node/v24.13.0/bin" \
    "$HOME/.nvm/versions/node"/*/bin \
    /opt/homebrew/bin \
    /usr/local/bin
  do
    if [ -x "$dir/node" ]; then
      export PATH="$dir:$PATH"
      break
    fi
  done
fi
