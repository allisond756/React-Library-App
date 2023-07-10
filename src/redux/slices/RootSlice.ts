import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        author: "Author",
        book_length: "Book Length",
        book_type: "Book Type",
        isbn: "ISBN"
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseBookLength: (state, action) => { state.book_length = action.payload },
        chooseBookType: (state, action) => { state.book_type = action.payload },
        chooseIsbn: (state, action) => { state.isbn = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseBookLength, chooseBookType, chooseIsbn } = rootSlice.actions