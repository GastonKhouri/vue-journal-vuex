import axios from 'axios';

const uploadImage = async ( file ) => {

    if ( !file ) return null;

    try {

        const formData = new FormData();
        formData.append( 'file', file );
        formData.append( 'upload_preset', 'curso-vue' );

        const url = 'https://api.cloudinary.com/v1_1/gastonlozano/image/upload';

        const { data } = await axios.post( url, formData );

        console.log( data );

        return data.secure_url;

    } catch ( error ) {

        console.log( 'Error uploading image: ', error );
        return null;

    }

};

export default uploadImage;