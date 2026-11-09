'use client';
import { useMemo, useState } from "react";

export default function TypingPractice({ lesson }) {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  const target = lesson.exercises[exerciseIndex] || "";
  const stats = useMemo(() => {
    let correct = 0;
    for (let i = 0; i < value.length; i++) if (value[i] === target[i]) correct++;
    return { accuracy: value.length ? Math.round(correct / value.length * 100) : 100, errors: value.length - correct };
  }, [value, target]);
  function next() {
    if (exerciseIndex < lesson.exercises.length - 1) {
      setExerciseIndex(exerciseIndex + 1); setValue(""); setDone(false);
    } else {
      setDone(true);
      try {
        const key = "typing-academy-completed";
        const saved = JSON.parse(localStorage.getItem(key) || "[]");
        if (!saved.includes(lesson.slug)) localStorage.setItem(key, JSON.stringify([...saved, lesson.slug]));
      } catch {}
    }
  }
  return <section className="practice">
    <div className="practice-top"><span>Exercise {exerciseIndex + 1} of {lesson.exercises.length}</span><span>Accuracy: {stats.accuracy}% · Errors: {stats.errors}</span></div>
    <div className="target">{target}</div>
    {done ? <div className="success"><h3>Lesson complete!</h3><p>Your progress has been saved on this device.</p><button onClick={() => {setExerciseIndex(0);setValue("");setDone(false);}}>Practice again</button></div> :
      <>
        <textarea autoFocus value={value} onChange={e => setValue(e.target.value)} placeholder="Start typing the text shown above..." spellCheck="false" />
        <div className="practice-actions"><span className="muted">Type the text exactly as shown.</span><button disabled={value.trim() !== target.trim()} onClick={next}> {exerciseIndex === lesson.exercises.length - 1 ? "Finish lesson" : "Next exercise"} </button></div>
      </>
    }
  </section>;
}
