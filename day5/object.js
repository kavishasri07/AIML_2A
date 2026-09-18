function college() {
    console.log(this.address)
};
let e= {
    address: "ABES EC Ghaziabad",
    city: "Ghaziaad",
    show: college
};
let f= {address: "College of Engg. near Crossing Republik.",
    city: "Ghaziabad",
    show: college
};
e.show();
f.show();