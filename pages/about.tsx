import Router from 'next/router';
import Layout from '../components/Layout'
import {Button}from "@material-ui/core";

export default function AboutPage() {
  return (
    <Layout>
      <h1>Страница информации</h1>
      <p>Приложение для учета выполненных задач</p>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => Router.push('/')}
      >
        К списку дел
      </Button>
    </Layout>
  )
}