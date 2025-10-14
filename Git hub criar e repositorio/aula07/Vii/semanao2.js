function PessoaFunc(firstName, lastName, dob) { 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.dob = new Date(dob); 

    this.getBirthYear = function () { 
        return this.dob.getFullYear(); 
    }; 

    this.getFullName = function () { 
        return `${this.firstName} ${this.lastName}`; 
    }; 

    // Alternativa ao if...else
    this.getAgeGroup = function () {
        const age = new Date().getFullYear() - this.dob.getFullYear();
        return age >= 18 ? 'Adulto' : 'Menor de idade';
    };
}
