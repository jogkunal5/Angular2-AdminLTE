class Students {

    //String
    _id:string;
    firstName: string;
	middleName: string;
    lastName: string;
    motherName: string;
    gender: string;    
	email: string;
    address: string;	
    course: string;
    aadharNo: string;
    district: string;
    taluka: string;
    lastQualification: string;
    lastCollege: string;

    // Date
    dob: Date;
    admissionDate: Date;    

    // Number
    contact: number;
    pincode: number;


    constructor(
    ){
        this.firstName = ""
		this.middleName = ""
		this.lastName = ""
        this.contact
		this.address = ""		
		this.email = ""
        this.dob       
    }
}

export default Students;