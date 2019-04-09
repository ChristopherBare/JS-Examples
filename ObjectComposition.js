class Profile {
    constructor(name, address, city, state, zip, avatar) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.avatar = avatar;
    }

    getProfileUpdate() {
        return {name: "newName", city: "San Francisco", avatar: "The Fog"};
    }

    updateProfile(object) {
        const newProfile = Object.assign({}, object, object.getProfileUpdate());
        console.log(newProfile);
    }
}

let profile = new Profile("Bob", "123 No Way", "Charlotte", "NC", "28202", "A Building");
let newProfile = new Profile(
  "Bob",
  "123 No Way",
  "Charlotte",
  "NC",
  "28202",
  "A Building"
);
profile.updateProfile(newProfile);

