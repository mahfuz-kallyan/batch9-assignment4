function password(obj) {
    if(obj.birthYear.toString().length !== 4 || obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined){
        return 'Invalid'
    }
    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1)
    let passString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;
    return passString;
}
console.log(password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google' }));
console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'facebook' }));
console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));

