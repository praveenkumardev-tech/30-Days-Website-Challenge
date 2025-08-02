import { Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"


type Props = {
    subject:string,
    footer:string,
    onReset:() => void
}

const MoodOutput = ({subject, footer, onReset}: Props)  => {
  return (
    <div className="space-y-4">
        <div>
            <label className="block font-medium">Subject:</label>
            <Input value={subject} readOnly/>
        </div>
        <div>
            <label className="block font-medium">Footer Signature:</label>
            <Textarea value={footer} readOnly/>
        </div>

        <Button onClick={onReset} variant="destructive" className="w-full bg-red-500 text-white" >
            Reset
        </Button>
    </div>
  )
}

export default MoodOutput
