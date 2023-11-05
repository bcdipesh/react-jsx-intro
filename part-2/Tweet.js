const Tweet = ({
  username = "loremIpsum",
  name = "Lorem Ipsum",
  date = "11/05/2023",
  message = "Dolor Init",
}) => (
  <div class="tweet">
    <div class="row">
      <p class="light-text">{username}</p>
      <p class="light-text">{date}</p>
    </div>
    <div class="row">
      <p>
        <q>{message}</q> - {name}
      </p>
    </div>
  </div>
);
