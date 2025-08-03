import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


type props = {
    mood: string,
    setMood: (val: string) => void,
    onGenerate: () => void,
    disabled: boolean
}


const MoodInput = ({ mood, setMood, onGenerate, disabled }: props) => {
  return (
    <div className="space-y-4">
        <Input
        placeholder="How are you feeling today? (happy, sad, angry...)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
        />

        <Button className="w-full bg-black text-white" onClick={onGenerate} disabled={disabled}>
            Genearate Email Template
        </Button>
    </div>
  )
}

export default MoodInput
