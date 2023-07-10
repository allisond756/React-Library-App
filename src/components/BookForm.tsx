import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle, chooseAuthor, chooseBookLength, chooseBookType, chooseIsbn } from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
  onClose: () => void;
}

const BookForm = (props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data:any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseTitle(data.title))
      dispatch(chooseAuthor(data.author))
      dispatch(chooseBookLength(data.book_length))
      dispatch(chooseBookType(data.book_type))
      dispatch(chooseIsbn(data.isbn))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000)
      event.target.reset();

      props.onClose();
    }

  }

  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='title'>Book Title</label>
          <Input {...register('title')} name='title' placeholder='Title'/>
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <Input {...register('author')} name='author' placeholder='Author'/>
        </div>
        <div>
          <label htmlFor='book_length'>Book Length</label>
          <Input {...register('book_length')} name='book_length' placeholder='Book Length'/>
        </div>
        <div>
          <label htmlFor='book_type'>Book Type</label>
          <Input {...register('book_type')} name='book_type' placeholder='Book Type'/>
        </div>
        <div>
          <label htmlFor='isbn'>ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder='ISBN'/>
        </div>
        <div className='flex p-1'>
          <Button
            className='flex justify-center m-3 w-full bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
            >
              Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm