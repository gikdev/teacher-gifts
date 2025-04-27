import { Scan } from "@phosphor-icons/react"
import { useQueryState } from "nuqs"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { type Person, people } from "./data"

export default function App() {
  const [code, setCode] = useQueryState("code")
  const person = code ? people.find(p => p.id === code) : null

  function checkCode(code: string) {
    const person = people.find(p => p.id === code)

    if (!person) {
      toast.error("کد اشتباه هست! دوباره امتحان کنید")
      return
    }

    setCode(code)
  }

  return (
    <div className="bg:app-slate-10 min-h:100dvh grid place-items:center">
      {person ? <GiftCard person={person} /> : <LoginForm checkCode={checkCode} />}
      <Toaster />
    </div>
  )
}

interface LoginFormProps {
  checkCode: (code: string) => void
}

function LoginForm({ checkCode }: LoginFormProps) {
  const [num1, setNum1] = useState("0")
  const [num2, setNum2] = useState("0")
  const [num3, setNum3] = useState("0")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    checkCode(`${num1}${num2}${num3}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w:400 p:20 flex flex-direction:column gap:20 bg:app-slate-20 color:app-slate-110 border-radius:16"
    >
      <h1 className="color:app-slate-120 font:bold text:center font:40">خوش آمدید!</h1>
      <p className="text:center">کد رو وارد کرده و هدیه رو دریافت کنید! 🎁</p>

      <div className="flex gap:16 justify-content:center" dir="ltr">
        <NumberSelect value={num1} setValue={setNum1} />
        <NumberSelect value={num2} setValue={setNum2} />
        <NumberSelect value={num3} setValue={setNum3} />
      </div>

      <button
        type="submit"
        className="flex gap:8 cursor:pointer justify-content:center bg:app-blue-90 py:8 px:16 w:full color:app-slate-120 font:bold border-radius:8"
      >
        <Scan size={24} />
        <span>تایید</span>
      </button>
    </form>
  )
}

interface NumberSelectProps {
  value: string
  setValue: (input: string) => void
}

function NumberSelect({ setValue, value }: NumberSelectProps) {
  return (
    <select
      required
      value={value}
      onChange={e => setValue(e.target.value)}
      className="bg:app-slate-30 color:app-slate-110 py:8 px:16 border-radius:8 font:32 cursor:pointer"
    >
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  )
}

interface GiftCardProps {
  person: Person
}

function GiftCard({ person }: GiftCardProps) {
  return <>سلام {person.fullName}</>
}
