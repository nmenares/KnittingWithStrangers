json.knitting_time do
  json.partial! '/api/knitting_times/knitting_time', knitting_time: @knitting_time
end

json.host do
  json.partial! '/api/users/user', user: @knitting_time.host
end

json.area do
  json.partial! '/api/areas/area', area: @knitting_time.area
end
