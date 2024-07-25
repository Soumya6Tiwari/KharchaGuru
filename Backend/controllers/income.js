const IncomeSchema= require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date}  = req.body


    // below is the instance of the income schema created
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

     // to save this data into the database

    try {
//         //validations
        if(!title || !category || !description || !date||!amount){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }

        // saving the instance income to the database
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } 
    catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    console.log(income)
}
 // method for getting all of our documents

exports.getIncomes = async (req, res) =>{
    try {
        // we are writing the below line and also sorting it because we want to keep our last created item at the top rather than at the bottom in the list , hence sort
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}


// creating a delete function

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)

       // callback function
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })

  
    }