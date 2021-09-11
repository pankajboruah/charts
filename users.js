module.exports = () => {
	const data = { users: [] };
	let date = 10;
	// Create 1000 users
	for (let i = 0; i < 14; i++) {
		data.users.push({
			id: i,
			name: `user${i}`,
			users: Math.floor(Math.random() * (1000 - 100) + 100),
			date: 10,
		});
		// date += 7;
	}
	return data;
};
