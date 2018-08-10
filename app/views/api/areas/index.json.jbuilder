
@areas.each do |area|
  json.knitting_times do
    area.knitting_times.each do |knitting_time|
      json.set! knitting_time.id do
        json.partial! 'api/knitting_times/knitting_time', knitting_time: knitting_time
      end
    end
  end
end

@areas.each do |area|
  json.set! area.id do
    json.extract! area, :id, :name, :knitting_times_ids
    json.knitting_times_ids []
  end
end
