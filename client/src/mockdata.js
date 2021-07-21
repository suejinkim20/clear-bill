const mockBills = [
    {
        category: "Cell Phone",
        description: "Verizon",
        dueDate: "2020-08-15",
        amount: "80.50",
        paymentLink: "www.verizon.com",
        paymentHints: "My pet's name",
        autoPay: true,
        paymentStatus: true
    },
    {
        category: "Electric",
        description: "Duke Energy",
        dueDate: "2020-08-01",
        amount: "61.20",
        paymentLink: "www.duke-energy.com",
        paymentHints: "Year of birth",
        autoPay: true,
        paymentStatus: false
    },
    {
        category: "Water",
        description: "Town of Raleigh",
        dueDate: "2020-08-01",
        amount: "61.20",
        paymentLink: "www.townofRaleigh.com",
        paymentHints: "Year of birth",
        autoPay: true,
        paymentStatus: false
    },
    {
        category: "Internet",
        description: "Comcast",
        dueDate: "2020-08-02",
        amount: "70.00",
        paymentLink: "www.verison.com",
        paymentHints: "My favorite color.",
        autoPay: false,
        paymentStatus: true
    },
    {
        category: "Car Payment",
        description: "Wells Fargo",
        dueDate: "2020-08-17",
        amount: "212.05",
        paymentLink: "www.wellsfargo.com",
        paymentHints: "My birthday.",
        autoPay: false,
        paymentStatus: false
    },
]

export default mockBills