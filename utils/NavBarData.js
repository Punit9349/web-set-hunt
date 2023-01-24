import React from 'react';

import { MdOutlineLeaderboard } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { RiTeamLine } from 'react-icons/ri';
import { FaFire } from 'react-icons/fa';

export const NavbarData = [
	{
		title: 'Dashboard',
		path: '/lobby/dashboard',
		icon: <FaFire size='40' />,
		cName: 'whMenuItem',
	},
	{},
	{
		title: 'Profile',
		path: '/lobby/profile',
		icon: <CgProfile size='40' />,
		cName: 'whMenuItem',
	},
	{
		title: 'Leaderboard',
		path: '/lobby/leaderboard',
		icon: <MdOutlineLeaderboard size='40' />,
		cName: 'whMenuItem',
	},
	{
		title: 'Team',
		path: '/lobby/teams',
		icon: <RiTeamLine size='40' />,
		cName: 'whMenuItem',
	},
	{},
];