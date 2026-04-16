import React from 'react';
import FriendsCard from '../components/FriendsCard';
import FriendsDashboard from '../components/FriendsDashboard';

const home = () => {
    return (
        <div>
            <FriendsDashboard/>
            <FriendsCard/>
        </div>
    );
};

export default home;