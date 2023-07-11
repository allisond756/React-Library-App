import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true},
    { field: 'title', headerName: "Book Title", flex: 1},
    { field: 'author', headerName: "Book Author", flex: 1},
    { field: 'book_length', headerName: "Book Length", flex: 1},
    { field: 'book_type', headerName: "Book Type", flex: 1},
    { field: 'isbn', headerName: "Book ISBN", flex: 1}
]

function DataTable() {
    const [ open, setOpen ] = useState(false)
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    //TODO: get Data

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
        
    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selectionmodel: ${selectionModel}`);
        setTimeout( () => { window.location.reload() }, 500)
        
    }

    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className='flex flex-row'>
                <div>
                    <button
                        className='p-2 m-3 bg-amber-200 bg-opacity-50 border-2 tracking-wide text-yellow-900 font-semibold  border-yellow-800 border-dashed rounded hover:bg-rose-200 hover:text-white'
                        onClick={() => handleOpen()}
                    >
                        Add New Book
                    </button>
                </div>
                <Button onClick={handleOpen} className="p-2 m-3 bg-amber-200 bg-opacity-50 tracking-wide text-yellow-900 font-semibold border-2 border-dashed  border-yellow-800 rounded hover:bg-rose-200 hover:text-white" >Update Book Info</Button>
                <Button onClick={deleteData} className="p-2 m-3 bg-amber-200 bg-opacity-50 tracking-wide text-yellow-900 font-semibold border-2 border-dashed  border-yellow-800 rounded hover:bg-rose-200 hover:text-white" >Delete Book</Button>
            </div>
            <div 
                className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style = {{ height: 400, width: '100%'}}
            >
                <h2 className='p-2 mb-2 flex flex-col items-center bg-amber-200 bg-opacity-50 tracking-wide text-yellow-900 font-semibold border-2 border-dashed  border-yellow-800 rounded'>My Books</h2>
                <DataGrid rows={contactData} columns={columns} pageSizeOptions={[5]}
                checkboxSelection={true} 
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }} />
            </div>
        </>
  )
}

export default DataTable