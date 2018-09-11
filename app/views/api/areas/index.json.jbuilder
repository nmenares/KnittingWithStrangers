json.knitting_areas do
  @areas.each do |area|
    json.set! area.id do
      json.extract! area, :id, :name
      json.set!(:knitting_times, area.knitting_times.map { |kt| kt.id })
    end
  end
end

json.knitting_times do
  kts = []
  @areas.each do |area|
    kts.concat(area.knitting_times)
  end
  kts.each do |kt|
    json.set! kt.id, kt
  end
end

json.knitting_time_enrollments do
  ktes = []
  @areas.each do |area|
    ktes.concat(area.enrollments)
  end
  ktes.each do |kte|
    json.set! kte.id, kte
  end
end

json.users do
  @users.each do |u|
    json.set! u.id do
      json.extract! u, :id, :username, :email, :phone, :description, :quote, :story
    end
  end
end
