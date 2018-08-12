json.partial! "api/users/user", user: @user

json.knitting_times do
  @user.knitting_times.each do |knitting_time|
    json.set! knitting_time.id do
      json.partial! 'api/knitting_times/knitting_time', knitting_time: knitting_time
    end
  end
end

json.hosted_knitting_times do
  @user.hosted_knitting_times.each do |hosted_knitting_time|
    json.set! hosted_knitting_time.id do
      json.partial! 'api/knitting_times/knitting_time', hosted_knitting_time: hosted_knitting_time
    end
  end
end
