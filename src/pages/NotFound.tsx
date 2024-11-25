import { FC } from "react"

// 接口定义
interface NotFoundProps {
  message: string
}

const NotFound: FC<NotFoundProps> = ({message}): JSX.Element => {

  return <>
    <span>NotFound: 404</span>
    <span>{message}</span>
  </>
}

export default NotFound

