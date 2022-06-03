import React from 'react';
import './Admin.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Adminpanel = () => {
	
	return (
		<>
			<div className='inner'>
				<div className='card'>
					<div className='btns'>
						<Link to="/admin"
							className='btn yozish'>
							Post Yozish
						</Link>
						<Link to="/admindelet"
							className='btn ochirish'>
							POST O'CHIRISH
						</Link>
					</div>
				</div>
				<div className='form__card'>
					<form className='inner__form'>
						<input
							required
							className='inner__input post-sarlavha'
							type='text'
							placeholder='Post sarlavhasini kiriting'
						/>
						<input
							required
							className='inner__input post-id'
							type='text'
							placeholder='Post ID kiriting'
						/>
						<textarea
							className='inner__input textarea'
							cols='40'
							rows='5'
							placeholder='Post matnini kiriting'></textarea>
						<input required className='input__file' type='file' />
						<Button
							className='inerbtn'
							type='Submit'
							size='medium'
							variant='contained'>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Adminpanel;
