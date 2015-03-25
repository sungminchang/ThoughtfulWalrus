var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the DataFetcher and GeoLocation service methods', function() {
  var DataFetcher;
  var GeoLocation;
  var $log;

  beforeEach(module('distress'));

  // https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
  beforeEach(inject(function(_DataFetcher_, _GeoLocation_, _$log_) {
    DataFetcher = _DataFetcher_;
    GeoLocation = _GeoLocation_;
    $log = _$log_;
  }));

  it('should have all the necessary methods', function(){
    expect(DataFetcher.getPoliceMap).to.not.be.undefined;
    expect(DataFetcher.getHospitalMap).to.not.be.undefined;
    expect(DataFetcher.getEmergencyNumber).to.not.be.undefined;
    expect(GeoLocation.getLocation).to.not.be.undefined;
    expect(GeoLocation.storeLocation).to.not.be.undefined;
  });
});