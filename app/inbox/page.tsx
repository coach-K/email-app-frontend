import clsx from "clsx";
import Link from "next/link";
import { Card, CardHeader, CardText, CardTitle, ListGroup, ListGroupItem } from "react-bootstrap";
import { fetchMessages } from "../lib/data";
import styles from "./page.module.css";

export default async function Inbox() {
  const response = await fetchMessages();
  const userMessage = response?.data;
  const messageList = userMessage?.messages;
  const colors = [styles.red, styles.green, styles.purple];

  return (
    <div className="m-2">
      <Card>
      <CardHeader>Inbox</CardHeader>
      <ListGroup variant="flush">
        {messageList && messageList.length > 0 ? messageList.map((message, index) => {
          const initial =`${message?.sender?.firstname.charAt(0)}${message?.sender?.lastname.charAt(0)}`;
          return <ListGroupItem key={index} variant={message.isRead ? '' : 'primary'}>
          <Link href={`/viewdetail/${message?.id}`}>
            <div className="d-flex">
              <div 
                className={clsx("me-3", styles.circleAvatar, colors[Math.floor(Math.random()*colors.length)])} >
                {initial}
              </div>
              <div>
                <CardTitle>{message.subject}</CardTitle>
                <CardText className={styles.content}>
                {message.content}
                </CardText>
              </div>
            </div>
          </Link>
        </ListGroupItem>
        }) 
        : <ListGroupItem className="text-center">No Message Available</ListGroupItem>}
      </ListGroup>
      </Card>
        
    </div>
  );
}
