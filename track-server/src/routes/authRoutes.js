const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
	const { email, password } = req.body
	try {
		const user = new User({ email, password })
		await user.save()
        console.log("user", user)
        const token = jwt.sign({ userId: user._id }, process.env.SECRET)
        console.log("token", token)
		res.send({token})
	} catch (err) {
		return res.status(422).send(err.message)
	}
})

router.post('/signin', async (req, res)=> {
    const { email, password } = req.body
    if (!email || !password){
        return res.status(422).send({error: 'must provide email or password'})
    }
    const user = await User.findOne({email})
    if(!user) return res.status(404).send({error: 'email not found'})
    try{
        await user.comparePassword(password)
        const token = await jwt.sign({userId: user._id}, process.env.SECRET)
        res.send({token})
    } catch (err){
        return res.status(401).send({error: 'invalid password or email'})
    }
})

module.exports = router
