import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Chat = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-1/4 border-r">
        <div className="p-4 font-medium">Users</div>
        <Paper className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    alt="John Doe"
                    src="https://i.pravatar.cc/150?img=3"
                  />
                }
                title="John Doe"
                subheader="Active 5m ago"
              />
            </Card>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    alt="Jane Smith"
                    src="https://i.pravatar.cc/150?img=8"
                  />
                }
                title="Jane Smith"
                subheader="Active 10m ago"
              />
            </Card>
          </div>
        </Paper>
      </div>
      <div className="flex flex-col w-3/4">
        <div className="p-4 font-medium">Chat</div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Avatar alt="John Doe" src="https://i.pravatar.cc/150?img=3" />
              <Card>
                <CardContent>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-sm">Hi, how are you?</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-2">
              <Avatar alt="Jane Smith" src="https://i.pravatar.cc/150?img=8" />
              <Card>
                <CardContent>
                  <p className="text-sm font-medium">Jane Smith</p>
                  <p className="text-sm">I'm good, thanks. How about you?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2">
            <TextField
              variant="outlined"
              placeholder="Type your message here..."
              fullWidth
            />
            <Button variant="contained" color="primary">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
