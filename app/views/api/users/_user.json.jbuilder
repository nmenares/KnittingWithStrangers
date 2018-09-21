json.extract! user, :id, :username, :email, :phone, :description, :quote, :story, :knitting_times, :hosted_knitting_times, :enrollments
if user.photo.attached?
  json.photoUrl url_for(user.photo)
end
