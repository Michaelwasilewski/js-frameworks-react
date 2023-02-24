import '../VotingBtn.css';

function VotingBtn({ handleVotes, name }) {
	return (
		<div className="VotingBtn">
			<button onClick={() => handleVotes(name)}>
				Vote for {name}
			</button>
		</div>
	);
}

export default VotingBtn;
