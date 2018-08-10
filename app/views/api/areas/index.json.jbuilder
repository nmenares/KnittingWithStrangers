json.knitting_areas do
  @areas.each do |area|
    json.set! area.id do
      json.extract! area, :id, :name, :knitting_time_ids
    end
  end
end

@areas.each do |area|
  json.knitting_times do
    area.knitting_times.each do |knitting_time|
      json.set! knitting_time.id do
        json.partial! 'api/knitting_times/knitting_time', knitting_time: knitting_time
      end
    end
  end
end
