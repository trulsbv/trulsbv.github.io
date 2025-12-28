import type { InputHTMLAttributes } from "react";

/** Styling and identification attributes */
export type StylingAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "style" | "id"
>;

/** Form-related attributes */
export type FormAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "form" | "disabled" | "readOnly" | "required" | "autoFocus"
>;

/** Accessibility attributes */
export type AccessibilityAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "tabIndex"
  | "title"
  | "aria-label"
  | "aria-labelledby"
  | "aria-describedby"
  | "aria-required"
  | "aria-invalid"
  | "aria-disabled"
  | "role"
>;

/** Mouse event handlers */
export type MouseEventAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "onClick"
  | "onMouseDown"
  | "onMouseUp"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseMove"
  | "onMouseOver"
  | "onMouseOut"
>;

/** Keyboard event handlers */
export type KeyboardEventAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "onKeyDown" | "onKeyUp" | "onKeyPress"
>;

/** Focus event handlers */
export type FocusEventAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "onFocus" | "onBlur"
>;

/** Touch event handlers */
export type TouchEventAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "onTouchStart" | "onTouchEnd" | "onTouchMove" | "onTouchCancel"
>;

/** Pointer event handlers */
export type PointerEventAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "onPointerDown"
  | "onPointerUp"
  | "onPointerMove"
  | "onPointerEnter"
  | "onPointerLeave"
  | "onPointerCancel"
>;

/** Other input event handlers */
export type OtherEventAttributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "onInput" | "onWheel"
>;

/**
 * Common HTML attributes that apply to all input types
 * Combines all styling, accessibility, and event handler attributes
 */
export type CommonInputAttributes = StylingAttributes &
  FormAttributes &
  AccessibilityAttributes &
  MouseEventAttributes &
  KeyboardEventAttributes &
  FocusEventAttributes &
  TouchEventAttributes &
  PointerEventAttributes &
  OtherEventAttributes;
