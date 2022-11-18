import '../styles/test.css';

export default function Test() {
	return (
		<div>
			<h2>Completá tus datos</h2>

			<form className='userData-card'>
				<div className='user-input'>
					<label className='userData-label'>Nombre</label>
					<input type={'text'} disabled className='userData-input'></input>
					<label className='userData-label'>Apellido</label>
					<input type={'text'} disabled className='userData-input'></input>
				</div>
				<div className='user-input'>
					<label className='userData-label'>Correo electrónico</label>
					<input type={'email'} disabled className='userData-input'></input>
					<label className='userData-label'>Ciudad</label>
					<input type={'text'} required className='userData-input'></input>
				</div>
			</form>
		</div>
	);
}
