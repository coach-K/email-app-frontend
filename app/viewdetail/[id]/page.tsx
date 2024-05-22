import { Card, CardHeader, CardText } from "react-bootstrap";
import { fetchSingleMessage, updateMessage } from "../../lib/data";
import { sender } from "../../lib/sender";

export default async function ViewDetail({ params }: { params: { id: number } }) {
  const response = await fetchSingleMessage(params.id);
  const message = response?.data;
  if (!message) {
    return <p className="mt-5 text-center">No message found</p>;
  }
  const user = message?.user;
  if (!message?.isRead) {
    const updateResponse = await updateMessage(params.id);
  }

  return (
    <div className="m-2">
      <Card>
        <CardHeader>
          <p className="mb-2"><strong>From:</strong> {sender && `${sender.firstname} ${sender.lastname}<${sender.email}>`}</p>
          <p className="mb-2"><strong>To:</strong> {user && `${user.firstname} ${user.lastname}<${user.email}>`}</p>
          <p className="mb-2"><strong>Subject:</strong> {message && message?.subject}</p>
          <p className="mb-0"><strong>DateTime:</strong> {message &&`${new Date(message?.createdAt).toLocaleDateString()} - ${new Date(message?.createdAt).toLocaleTimeString()}`}</p>
        </CardHeader>
        <CardText className="m-3">
          {message && message.content}
        </CardText>
      </Card>
        
    </div>
  );
}
