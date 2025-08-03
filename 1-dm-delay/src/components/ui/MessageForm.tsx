import React, { useState } from 'react'
import { Textarea } from './textarea'
import { Input } from './input'
import { Button } from './button'

const MessageForm = () => {

    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(10);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("");

    const handleSend = () =>{
        setIsSending(true);

        const id = setTimeout(() => {
            setSentMessage(message);
            setMessage("");
            setIsSending(false);
        }, delay * 1000)

        setTimerId(id);
    }
    const handleCancel = () =>{
            if(timerId) clearTimeout(timerId);
            setIsSending(false);
    }



  return (
    <div className='max-w-md mx-auto mt-20 p-6 border bg-white rounded-lg shadow-sm space-y-4'>
      <h2 className='text-2xl font-bold text-gray-800'>Dm Delay Button</h2>

      <Textarea
        placeholder='Type your Message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Input 
      type='number'
      placeholder='Delay in seconds'
      value ={delay}
      onChange={(e) => setDelay(Number(e.target.value))}
      disabled={isSending}
      />

    {!isSending ?(
        <Button onClick={handleSend} className='w-full bg-black text-white hover:bg-gray-900'>
          Send with delay
        </Button>
    ) : (
        <Button onClick={handleCancel} className='w-full bg-black text-white hover:bg-gray-900'>
            Cancel Sending
        </Button>
    )}

    { sentMessage && (
        <div className='bg-green-100 border rounded p-3 text-green-900'>
            <p className='font-semibold'>Message Sent:</p>
            <p>{sentMessage}</p>
        </div>
    )}

    </div>
  )
}

export default MessageForm
