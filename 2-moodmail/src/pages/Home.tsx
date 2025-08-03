import MoodInput from "@/components/ui/MoodInput"
import MoodOutput from "@/components/ui/MoodOutput"
import { useState } from "react";

const Home = () => {

    const [mood, setMood] = useState("");
    const [subject, setSubject] = useState("");
    const [footer, setfooter] = useState("");
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () =>{
        const lowerMood = mood.toLowerCase();

        if(lowerMood.includes("happy")){
            setSubject("Feeling Great Today!");
            setfooter("Stay awesome")
        }else if(lowerMood.includes("sad")){
            setSubject("Just anotehr tough day..");
            setfooter("Sending hugs");
        }else if(lowerMood.includes("angry")){
            setSubject("Need to cool of...");
            setfooter("Take a deep breath");
        }else{
            setSubject("Mood update later");
            setfooter("Catch you later");
        }

        setGenerated(true);
    }

    const handleReset =() => {
        setMood("");
        setSubject("");
        setfooter("");
        setGenerated(false);
    }


  return (
    <div className='max-w-xl mx-auto mt-20 p-4 rounded-lg shadow-sm bg-white space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800'>MoodMail Generator</h2>

      {!generated ? (
        <MoodInput mood={mood} setMood={setMood} 
        onGenerate={handleGenerate}
        disabled={generated} 
        />
      ):(
        <MoodOutput subject = {subject} footer={footer} onReset={handleReset}/>
      )}



    

    </div>
  )
}

export default Home
