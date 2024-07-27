
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const allUser = async(req,res)=>{
    const allUser = await prisma.user.findMany()
           res.json(allUser)
}

const create = async(req, res)=>{
    try{
        const newUser = await  prisma.user.create({data:req.body})
        res.status(201).json(newUser)
    }catch (error) {
     console.log(error)
    }
}
const update = async (req, res) => {
    try{
        const id = req.params.id;
        const first_name = req.body.first_name;
        const updateUser = await prisma.user.update({
            where: {id: parseInt(id)},
            data: {first_name: first_name}
        })
        res.status(201).json(updateUser)

    }catch (error) {
    console.log(error)
    }
}

const delUser = async(req,res)=>{
    try {
        const id = req.params.id
        const deleteUser = await prisma.user.delete({
            where: {id: parseInt(id)},
        })
        res.status(202).json(deleteUser)
    }catch (error){
        console.log(error)
    }
}

module.exports = {
    allUser,
    create,
    update,
    delUser,
}