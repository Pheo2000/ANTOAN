const { default: axios } = require("axios")

const uploadFile = async (file) =>{
    const url = 'http://144.126.136.135:3000/upload'

    const formData = new FormData();
    formData.append('file', file)

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    
    const res = await axios.post(url, formData, config)

    return res.data
}

export {uploadFile}