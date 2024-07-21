
import style from './ErrorMessage.module.css';
import React from 'react';


interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={style.errorMessage}>{message}</div>
);



export default ErrorMessage;
