import userData from "../../userData.json";
export default function Profile() {
  return (
    <div>
      <div>
        <img
          src= {userData.avatar}
          alt="User avatar"
        />
              <p>{userData.username}</p>
              <p>@{userData.tag}</p>
              <p>{userData.location}</p>
      </div>
      <ul>
        <li>
          <span>user</span>
                  <span>{userData.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
                  <span>{userData.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
                  <span>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}


