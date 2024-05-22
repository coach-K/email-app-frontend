import Link from "next/link";
import { Card, CardHeader, CardText, CardTitle, ListGroup, ListGroupItem } from "react-bootstrap";
import { fetchMessages } from "../lib/data";
import styles from "./page.module.css";

export default async function Inbox() {
  const response = await fetchMessages();
  const userMessage = response?.data;
  const messageList = userMessage?.messages;

  return (
    <div className="m-2">
      <Card>
      <CardHeader>Inbox</CardHeader>
      <ListGroup variant="flush">
        {messageList && messageList.length > 0 ? messageList.map((message, index) => {
          return <ListGroupItem key={index} variant={message.isRead ? '' : 'primary'}>
          <Link href={`/viewdetail/${message?.id}`}>
            <CardTitle>{message.subject}</CardTitle>
            <CardText className={styles.content}>
            {message.content}
            </CardText>
          </Link>
        </ListGroupItem>
        }) 
        : <ListGroupItem className="text-center">No Message Available</ListGroupItem>}
      </ListGroup>
      </Card>
        
    </div>
  );
}
