import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const CreateToDo = () => {
  return (
    <Dialog className=''>
      <form>
        <DialogTrigger render={<Button variant="outline" className="h-11 rounded-xl border-green-200 bg-white  text-green-700 shadow-sm transition hover:border-green-400 hover:bg-green-50 hover:text-green-800 absolute bottom-20 right-20"><Plus size={70} /></Button>} />
        <DialogContent className="w-[calc(100%-1rem)] max-w-lg rounded-2xl !p-6 border border-green-100 bg-gradient-to-br from-white via-green-50 to-emerald-50  text-slate-800 shadow-[0_25px_60px_-20px_rgba(22,163,74,0.45)] sm:rounded-3xl sm:p-7">
          <DialogHeader className="space-y-2 px-1">
            <DialogTitle className="text-2xl font-bold text-green-700">Create your To-Do</DialogTitle>
            <DialogDescription className="text-sm text-slate-600">
              Make your to-do here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="space-y-4 !pt-2 !px-1">
            <Field>
              <Label htmlFor="name-1" className="text-sm font-medium text-slate-700">To-Do Name</Label>
              <Input id="name-1" name="name" defaultValue="Writting.." className="!p-2 h-11 border-green-200 bg-white text-slate-800 shadow-sm transition focus:border-green-400 focus:ring-2 focus:ring-green-200" />
            </Field>
            <Field>
              <Label htmlFor="username-1" className="text-sm font-medium text-slate-700">Description</Label>
              <Input id="username-1" name="username" defaultValue="Writting for someone." className="!p-2 h-11 border-green-200 bg-white text-slate-800 shadow-sm transition focus:border-green-400 focus:ring-2 focus:ring-green-200" />
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-4 mx-0 mb-0 border-t border-green-100 bg-transparent sm:justify-end sm:p-4">
            <DialogClose render={<Button variant="outline" className="h-10 rounded-xl border-slate-200 bg-white text-slate-700 hover:bg-slate-50">Cancel</Button>} />
            <Button type="submit" className="h-10 rounded-xl bg-green-600 text-white shadow-sm hover:bg-green-500">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default CreateToDo