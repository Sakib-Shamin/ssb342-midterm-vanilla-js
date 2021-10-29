export default class SSCSingleUSer
{
    #_id;
    #_name;
    #_email;
    #_fullAddress;
    #_contact;
    #_cityWithState;
    #_gender;
    #_image_thumbnail;
    #_image_large;
    #_dateOfBirth;
    constructor( userFromAPI, id )
    {
        this.setId( id );
        this.setName( userFromAPI.name );
        this.setEmail( userFromAPI.email );
        this.setCityWithState( userFromAPI.location );
        this.setFullAddress( userFromAPI.location );
        this.setContact( userFromAPI.cell );
        this.setGender( userFromAPI.gender );
        this.setImageThumbnail( userFromAPI.picture );
        this.setImageLarge( userFromAPI.picture );
        this.setDateOfBirth( userFromAPI.dob );
    }
    getId()
    {
        return this.#_id;
    }
    getName()
    {
        return this.#_name;
    }
    getEmail()
    {
        return this.#_email;
    }
    getFullAddress()
    {
        return this.#_fullAddress;
    }
    getContact()
    {
        return this.#_contact;
    }
    getCityWithState()
    {
        return this.#_cityWithState;
    }
    getGender()
    {
        return this.#_gender;
    }
    getImageThumbnail()
    {
        return this.#_image_thumbnail;
    }
    getImageLarge()
    {
        return this.#_image_large;
    }
    getDateOfBirth()
    {
        return this.#_dateOfBirth;
    }
    setId( id )
    {
        this.#_id = id;
    }
    setName( nameKey )
    {
        this.#_name = `${nameKey.first} ${nameKey.last}`;
    }
    setEmail( emailKey )
    {
        this.#_email = emailKey;
    }
    setFullAddress( addressKey )
    {
        this.#_fullAddress = `${ addressKey.street.number } ${ addressKey.street.name }, ${ this.getCityWithState() } - ${ addressKey.postcode }`;
    }
    setCityWithState ( addressKey )
    {
        this.#_cityWithState = `${ addressKey.city } ${ addressKey.state }`;
    }
    setContact( contactKey )
    {
        this.#_contact = contactKey;
    }
    setGender( genderKey )
    {
        this.#_gender = genderKey;
    }
    setImageThumbnail( imageKey )
    {
        this.#_image_thumbnail = imageKey.medium;
    }
    setImageLarge( imageKey )
    {
        this.#_image_large = imageKey.large;
    }
    setDateOfBirth( dateOfBirthKey )
    {
        const birthday = new Date ( dateOfBirthKey.date );

        return `${birthday.getMonth()}/${birthday.getDate()}/${birthday.getFullYear()}`;
    }
}