CREATE TABLE `user` (
	uno int not null auto_increment,
	uid varchar(50) not null,
	upw varchar(50) not null,
	uname varchar(100) not null,
	uflag int default 0,
	regdate timestamp not null default now(),
	lastdate	timestamp not null default now(),
	primary key(uno)
);ohmovie