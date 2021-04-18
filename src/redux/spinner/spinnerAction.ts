export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

export interface ShowSpinnerAction {
  type: typeof SHOW_SPINNER;
}
export interface HideSpinnerAction {
  type: typeof HIDE_SPINNER;
}

export type SpinnerAction = ShowSpinnerAction | HideSpinnerAction;
