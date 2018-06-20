class Enquiry {
    _id:string;
    name: string;
    contact: number;
    address: string;
	email: string;
	about: string;
    date: Date;

    constructor(
    ){
        this.name = ""
        this.contact
		this.address = ""
		this.about = ""
		this.email = ""
        this.date = new Date()        
    }
}

export default Enquiry;