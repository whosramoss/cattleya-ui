export type ResponsiveObject<T> = { xs?: T; md?: T }

export type Responsive<T> = T | ResponsiveObject<T>
