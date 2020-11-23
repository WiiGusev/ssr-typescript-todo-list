import {useEffect} from 'react';
import Layout from '../components/Layout'
import {Button}from '@material-ui/core';
import {w3cwebsocket as WebSocket} from 'websocket';

const client = new WebSocket('ws://echo.websocket.org');

export default function AboutPage() {
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('new message ', dataFromServer);
    };
  });

  const onSend = () => {
    client.send(JSON.stringify({
      type: "message",
      msg: 'Test сообщение',
      user: 'user'
    }));
  };
  return (
    <Layout>
      <h1>Страница проверки работы WebSocket</h1>
      <p>Нажмите на кнопку для отправки данных</p>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={onSend}
      >
        Отправить данные
      </Button>
    </Layout>
  )
}