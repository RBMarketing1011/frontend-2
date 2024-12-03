export interface ChartData
{
  date: string
  [ key: string ]: string | number
}

export interface ChartMetric
{
  label: string
  color?: string
  isTab?: boolean
  type?: 'total' | 'average'
  displayAs?: 'currency' | 'number'
  infoCard?: string | JSX.Element
}

export interface ChartConfig
{
  [ key: string ]: ChartMetric
}

export interface InteractiveChartProps
{
  data: ChartData[]
  config: ChartConfig
  title?: string | JSX.Element
  description?: string
  defaultActiveChart?: string
}