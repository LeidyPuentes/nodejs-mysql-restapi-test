import {Router} from 'express'
import { getEmployees, createEmployees, updateEmpoyees, deleteEmployees, getEmployee} from '../controllers/employees.controller.js' 

const router = Router()


router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

router.patch('/employees/:id', updateEmpoyees)

router.delete('/employees/:id', deleteEmployees)

export default router

